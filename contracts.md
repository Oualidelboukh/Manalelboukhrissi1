# API Contracts - Dental Clinic Website

## Overview
This document defines the API contracts between Frontend and Backend for the dental clinic website.

## Base URL
- Development: `${REACT_APP_BACKEND_URL}/api`
- All routes are prefixed with `/api`

---

## Appointments API

### 1. Create Appointment
**POST** `/api/appointments`

**Purpose**: Create a new appointment booking

**Request Body**:
```json
{
  "name": "string (required)",
  "phone": "string (required)",
  "email": "string (optional)",
  "service": "string (required)",
  "date": "string (ISO date, required)",
  "time": "string (required)",
  "notes": "string (optional)"
}
```

**Response** (201):
```json
{
  "success": true,
  "message": "تم حجز موعدك بنجاح",
  "appointment": {
    "id": "string",
    "name": "string",
    "phone": "string",
    "email": "string",
    "service": "string",
    "date": "string",
    "time": "string",
    "notes": "string",
    "status": "pending",
    "createdAt": "string"
  }
}
```

**Error Response** (400):
```json
{
  "success": false,
  "message": "خطأ في البيانات المدخلة",
  "errors": ["array of error messages"]
}
```

---

### 2. Get All Appointments (Admin)
**GET** `/api/appointments`

**Purpose**: Retrieve all appointments (for admin dashboard)

**Query Parameters**:
- `status` (optional): Filter by status (pending, confirmed, cancelled, completed)
- `date` (optional): Filter by date
- `limit` (optional): Number of results per page (default: 50)
- `page` (optional): Page number (default: 1)

**Response** (200):
```json
{
  "success": true,
  "appointments": [
    {
      "id": "string",
      "name": "string",
      "phone": "string",
      "email": "string",
      "service": "string",
      "date": "string",
      "time": "string",
      "notes": "string",
      "status": "pending",
      "createdAt": "string"
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "pages": 2,
    "limit": 50
  }
}
```

---

### 3. Get Appointment by ID
**GET** `/api/appointments/:id`

**Purpose**: Retrieve a specific appointment

**Response** (200):
```json
{
  "success": true,
  "appointment": {
    "id": "string",
    "name": "string",
    "phone": "string",
    "email": "string",
    "service": "string",
    "date": "string",
    "time": "string",
    "notes": "string",
    "status": "pending",
    "createdAt": "string",
    "updatedAt": "string"
  }
}
```

**Error Response** (404):
```json
{
  "success": false,
  "message": "الموعد غير موجود"
}
```

---

### 4. Update Appointment Status
**PATCH** `/api/appointments/:id/status`

**Purpose**: Update appointment status (for admin)

**Request Body**:
```json
{
  "status": "confirmed" | "cancelled" | "completed"
}
```

**Response** (200):
```json
{
  "success": true,
  "message": "تم تحديث حالة الموعد",
  "appointment": {
    "id": "string",
    "status": "confirmed",
    "updatedAt": "string"
  }
}
```

---

### 5. Delete Appointment
**DELETE** `/api/appointments/:id`

**Purpose**: Delete an appointment

**Response** (200):
```json
{
  "success": true,
  "message": "تم حذف الموعد بنجاح"
}
```

---

## Contact Messages API (Optional Future Enhancement)

### Create Contact Message
**POST** `/api/contact`

**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```

---

## Frontend Integration Notes

### Mock Data (mockData.js)
Currently contains:
- `clinicInfo` - **Keep as static** (no backend needed)
- `services` - **Keep as static** (no backend needed)
- `testimonials` - **Keep as mock for now** (can be moved to DB later)
- `images` - **Keep as static**

### What needs Backend:
- **Appointments**: Remove from mock, connect to API
  - Form submission → POST `/api/appointments`
  - Success: Show toast notification
  - Error: Show error message

### Frontend Changes Required:
1. Update `AppointmentSection.jsx`:
   - Replace mock submission with actual API call
   - Use axios to POST to `/api/appointments`
   - Handle loading state
   - Handle success/error responses

2. Environment Variables:
   - Use `process.env.REACT_APP_BACKEND_URL` for API base URL
   - All API calls should use `${REACT_APP_BACKEND_URL}/api`

---

## Database Schema

### Appointments Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  phone: String (required),
  email: String (optional),
  service: String (required),
  date: Date (required),
  time: String (required),
  notes: String (optional),
  status: String (enum: ['pending', 'confirmed', 'cancelled', 'completed']),
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
- `date` (ascending) - for date-based queries
- `status` (ascending) - for status filtering
- `createdAt` (descending) - for recent appointments

---

## Error Handling

### Common HTTP Status Codes:
- `200` - Success
- `201` - Created successfully
- `400` - Bad request (validation errors)
- `404` - Not found
- `500` - Internal server error

### Error Response Format:
```json
{
  "success": false,
  "message": "Error message in Arabic",
  "errors": ["Optional array of detailed errors"]
}
```

---

## Backend Implementation Steps

1. ✅ Create MongoDB model for Appointments
2. ✅ Create API routes for appointments
3. ✅ Add validation middleware
4. ✅ Add error handling
5. ✅ Test endpoints with curl
6. ✅ Update Frontend to use API
7. ✅ Test full integration

---

## Testing Checklist

### Backend Tests:
- [ ] POST appointment with valid data
- [ ] POST appointment with missing required fields
- [ ] GET all appointments
- [ ] GET appointment by ID
- [ ] UPDATE appointment status
- [ ] DELETE appointment

### Frontend Tests:
- [ ] Form validation works
- [ ] Successful appointment booking shows success message
- [ ] Error handling displays appropriate messages
- [ ] Loading state works correctly

---

## Notes
- All dates should be stored in ISO format
- Phone numbers should be validated (Moroccan format)
- Email validation is optional but recommended
- Status changes should be logged for audit trail
