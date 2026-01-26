"""
Dental Clinic API Tests
Tests for appointments and admin authentication endpoints
"""
import pytest
import requests
import os
import uuid
from datetime import datetime, timedelta

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

# Test credentials
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "Manal*2024"


class TestHealthAndRoot:
    """Test basic API health and root endpoints"""
    
    def test_api_root(self):
        """Test API root endpoint returns welcome message"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert "Dental Clinic API" in data["message"]
        print(f"✓ API root endpoint working: {data['message']}")


class TestAdminAuthentication:
    """Test admin login and authentication endpoints"""
    
    def test_admin_login_success(self):
        """Test successful admin login with correct credentials"""
        response = requests.post(f"{BASE_URL}/api/admin/login", json={
            "username": ADMIN_USERNAME,
            "password": ADMIN_PASSWORD
        })
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        assert "token" in data
        assert len(data["token"]) > 0
        print(f"✓ Admin login successful, token received")
        return data["token"]
    
    def test_admin_login_wrong_username(self):
        """Test login with wrong username returns 401"""
        response = requests.post(f"{BASE_URL}/api/admin/login", json={
            "username": "wronguser",
            "password": ADMIN_PASSWORD
        })
        assert response.status_code == 401
        print(f"✓ Wrong username correctly rejected with 401")
    
    def test_admin_login_wrong_password(self):
        """Test login with wrong password returns 401"""
        response = requests.post(f"{BASE_URL}/api/admin/login", json={
            "username": ADMIN_USERNAME,
            "password": "wrongpassword"
        })
        assert response.status_code == 401
        print(f"✓ Wrong password correctly rejected with 401")
    
    def test_admin_login_empty_credentials(self):
        """Test login with empty credentials returns error"""
        response = requests.post(f"{BASE_URL}/api/admin/login", json={
            "username": "",
            "password": ""
        })
        # Should return 401 or 422 for validation error
        assert response.status_code in [401, 422]
        print(f"✓ Empty credentials correctly rejected with {response.status_code}")


class TestAppointments:
    """Test appointment CRUD operations"""
    
    @pytest.fixture
    def test_appointment_data(self):
        """Generate test appointment data"""
        tomorrow = (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')
        return {
            "name": f"TEST_Patient_{uuid.uuid4().hex[:8]}",
            "phone": "0612345678",
            "email": "test@example.com",
            "service": "تقويم الأسنان",
            "date": tomorrow,
            "time": "10:00",
            "notes": "Test appointment notes"
        }
    
    def test_create_appointment(self, test_appointment_data):
        """Test creating a new appointment"""
        response = requests.post(f"{BASE_URL}/api/appointments", json=test_appointment_data)
        assert response.status_code == 201
        data = response.json()
        assert data["success"] == True
        assert "appointment" in data
        assert data["appointment"]["name"] == test_appointment_data["name"]
        assert data["appointment"]["phone"] == test_appointment_data["phone"]
        assert data["appointment"]["service"] == test_appointment_data["service"]
        assert data["appointment"]["status"] == "pending"
        assert "id" in data["appointment"]
        print(f"✓ Appointment created successfully with ID: {data['appointment']['id']}")
        return data["appointment"]["id"]
    
    def test_create_appointment_missing_required_fields(self):
        """Test creating appointment with missing required fields"""
        response = requests.post(f"{BASE_URL}/api/appointments", json={
            "name": "Test Patient"
            # Missing phone, service, date, time
        })
        assert response.status_code == 422
        print(f"✓ Missing required fields correctly rejected with 422")
    
    def test_create_appointment_invalid_phone(self):
        """Test creating appointment with invalid phone number"""
        tomorrow = (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')
        response = requests.post(f"{BASE_URL}/api/appointments", json={
            "name": "Test Patient",
            "phone": "123",  # Too short
            "service": "تقويم الأسنان",
            "date": tomorrow,
            "time": "10:00"
        })
        assert response.status_code in [400, 422]
        print(f"✓ Invalid phone correctly rejected with {response.status_code}")
    
    def test_get_appointments(self):
        """Test getting all appointments"""
        response = requests.get(f"{BASE_URL}/api/appointments")
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        assert "appointments" in data
        assert isinstance(data["appointments"], list)
        assert "pagination" in data
        print(f"✓ Got {len(data['appointments'])} appointments")
    
    def test_get_appointments_with_status_filter(self):
        """Test getting appointments filtered by status"""
        response = requests.get(f"{BASE_URL}/api/appointments", params={"status": "pending"})
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        # All returned appointments should have pending status
        for apt in data["appointments"]:
            assert apt["status"] == "pending"
        print(f"✓ Status filter working, got {len(data['appointments'])} pending appointments")
    
    def test_create_and_get_appointment(self, test_appointment_data):
        """Test creating an appointment and then retrieving it"""
        # Create appointment
        create_response = requests.post(f"{BASE_URL}/api/appointments", json=test_appointment_data)
        assert create_response.status_code == 201
        appointment_id = create_response.json()["appointment"]["id"]
        
        # Get the specific appointment
        get_response = requests.get(f"{BASE_URL}/api/appointments/{appointment_id}")
        assert get_response.status_code == 200
        data = get_response.json()
        assert data["success"] == True
        assert data["appointment"]["id"] == appointment_id
        assert data["appointment"]["name"] == test_appointment_data["name"]
        print(f"✓ Created and retrieved appointment {appointment_id}")
        return appointment_id
    
    def test_update_appointment_status(self, test_appointment_data):
        """Test updating appointment status"""
        # Create appointment first
        create_response = requests.post(f"{BASE_URL}/api/appointments", json=test_appointment_data)
        assert create_response.status_code == 201
        appointment_id = create_response.json()["appointment"]["id"]
        
        # Update status to confirmed
        update_response = requests.patch(
            f"{BASE_URL}/api/appointments/{appointment_id}/status",
            json={"status": "confirmed"}
        )
        assert update_response.status_code == 200
        data = update_response.json()
        assert data["success"] == True
        
        # Verify the update by getting the appointment
        get_response = requests.get(f"{BASE_URL}/api/appointments/{appointment_id}")
        assert get_response.status_code == 200
        assert get_response.json()["appointment"]["status"] == "confirmed"
        print(f"✓ Appointment status updated to confirmed")
        return appointment_id
    
    def test_update_appointment_invalid_status(self, test_appointment_data):
        """Test updating appointment with invalid status"""
        # Create appointment first
        create_response = requests.post(f"{BASE_URL}/api/appointments", json=test_appointment_data)
        assert create_response.status_code == 201
        appointment_id = create_response.json()["appointment"]["id"]
        
        # Try to update with invalid status
        update_response = requests.patch(
            f"{BASE_URL}/api/appointments/{appointment_id}/status",
            json={"status": "invalid_status"}
        )
        assert update_response.status_code == 422
        print(f"✓ Invalid status correctly rejected with 422")
    
    def test_delete_appointment(self, test_appointment_data):
        """Test deleting an appointment"""
        # Create appointment first
        create_response = requests.post(f"{BASE_URL}/api/appointments", json=test_appointment_data)
        assert create_response.status_code == 201
        appointment_id = create_response.json()["appointment"]["id"]
        
        # Delete the appointment
        delete_response = requests.delete(f"{BASE_URL}/api/appointments/{appointment_id}")
        assert delete_response.status_code == 200
        data = delete_response.json()
        assert data["success"] == True
        
        # Verify deletion by trying to get the appointment
        get_response = requests.get(f"{BASE_URL}/api/appointments/{appointment_id}")
        assert get_response.status_code == 404
        print(f"✓ Appointment deleted and verified not found")
    
    def test_get_nonexistent_appointment(self):
        """Test getting a non-existent appointment returns 404"""
        fake_id = str(uuid.uuid4())
        response = requests.get(f"{BASE_URL}/api/appointments/{fake_id}")
        assert response.status_code == 404
        print(f"✓ Non-existent appointment correctly returns 404")
    
    def test_delete_nonexistent_appointment(self):
        """Test deleting a non-existent appointment returns 404"""
        fake_id = str(uuid.uuid4())
        response = requests.delete(f"{BASE_URL}/api/appointments/{fake_id}")
        assert response.status_code == 404
        print(f"✓ Deleting non-existent appointment correctly returns 404")


class TestStatusEndpoint:
    """Test status check endpoint"""
    
    def test_create_status_check(self):
        """Test creating a status check"""
        response = requests.post(f"{BASE_URL}/api/status", json={
            "client_name": "TEST_Client"
        })
        assert response.status_code == 200
        data = response.json()
        assert "id" in data
        assert data["client_name"] == "TEST_Client"
        print(f"✓ Status check created successfully")
    
    def test_get_status_checks(self):
        """Test getting status checks"""
        response = requests.get(f"{BASE_URL}/api/status")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Got {len(data)} status checks")


# Cleanup fixture to remove test data after tests
@pytest.fixture(scope="session", autouse=True)
def cleanup_test_appointments():
    """Cleanup test appointments after all tests complete"""
    yield
    # After tests, try to clean up TEST_ prefixed appointments
    try:
        response = requests.get(f"{BASE_URL}/api/appointments", params={"limit": 100})
        if response.status_code == 200:
            appointments = response.json().get("appointments", [])
            for apt in appointments:
                if apt.get("name", "").startswith("TEST_"):
                    requests.delete(f"{BASE_URL}/api/appointments/{apt['id']}")
            print("✓ Test appointments cleaned up")
    except Exception as e:
        print(f"Warning: Could not cleanup test appointments: {e}")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
