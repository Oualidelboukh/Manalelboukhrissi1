import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Phone, Mail, User, Filter, Search, ChevronDown, CheckCircle, XCircle, AlertCircle, Trash2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/dental-clinic.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const statusOptions = [
  { value: 'all', label: 'الكل', color: 'gray' },
  { value: 'pending', label: 'معلق', color: 'yellow' },
  { value: 'confirmed', label: 'مؤكد', color: 'green' },
  { value: 'cancelled', label: 'ملغي', color: 'red' },
  { value: 'completed', label: 'مكتمل', color: 'blue' }
];

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  confirmed: 'bg-green-100 text-green-800 border-green-300',
  cancelled: 'bg-red-100 text-red-800 border-red-300',
  completed: 'bg-blue-100 text-blue-800 border-blue-300'
};

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    confirmed: 0,
    cancelled: 0,
    completed: 0
  });

  useEffect(() => {
    fetchAppointments();
  }, [statusFilter]);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const params = statusFilter !== 'all' ? { status: statusFilter } : {};
      const response = await axios.get(`${API}/appointments`, { params });
      
      if (response.data.success) {
        setAppointments(response.data.appointments);
        calculateStats(response.data.appointments);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast.error('فشل في تحميل المواعيد');
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data) => {
    const newStats = {
      total: data.length,
      pending: data.filter(a => a.status === 'pending').length,
      confirmed: data.filter(a => a.status === 'confirmed').length,
      cancelled: data.filter(a => a.status === 'cancelled').length,
      completed: data.filter(a => a.status === 'completed').length
    };
    setStats(newStats);
  };

  const updateAppointmentStatus = async (appointmentId, newStatus) => {
    try {
      const response = await axios.patch(`${API}/appointments/${appointmentId}/status`, {
        status: newStatus
      });
      
      if (response.data.success) {
        toast.success('تم تحديث حالة الموعد بنجاح');
        fetchAppointments();
        setSelectedAppointment(null);
      }
    } catch (error) {
      console.error('Error updating appointment:', error);
      toast.error('فشل في تحديث حالة الموعد');
    }
  };

  const deleteAppointment = async (appointmentId) => {
    if (!window.confirm('هل أنت متأكد من حذف هذا الموعد؟')) return;
    
    try {
      const response = await axios.delete(`${API}/appointments/${appointmentId}`);
      
      if (response.data.success) {
        toast.success('تم حذف الموعد بنجاح');
        fetchAppointments();
        setSelectedAppointment(null);
      }
    } catch (error) {
      console.error('Error deleting appointment:', error);
      toast.error('فشل في حذف الموعد');
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = 
      appointment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.phone.includes(searchQuery) ||
      appointment.service.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2]" dir="rtl">
      {/* Header */}
      <div className="bg-[#1a3a52] text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">لوحة التحكم الإدارية</h1>
              <p className="text-white/80">إدارة مواعيد عيادة طب الأسنان</p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" style={{ transform: 'scaleX(-1)' }} />
              العودة للموقع
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-r-4 border-gray-500">
            <div className="text-gray-600 text-sm mb-1">إجمالي المواعيد</div>
            <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-r-4 border-yellow-500">
            <div className="text-gray-600 text-sm mb-1">معلق</div>
            <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-r-4 border-green-500">
            <div className="text-gray-600 text-sm mb-1">مؤكد</div>
            <div className="text-3xl font-bold text-green-600">{stats.confirmed}</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-r-4 border-blue-500">
            <div className="text-gray-600 text-sm mb-1">مكتمل</div>
            <div className="text-3xl font-bold text-blue-600">{stats.completed}</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-r-4 border-red-500">
            <div className="text-gray-600 text-sm mb-1">ملغي</div>
            <div className="text-3xl font-bold text-red-600">{stats.cancelled}</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث بالاسم، الهاتف، أو الخدمة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1a3a52] focus:outline-none transition-colors"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              {statusOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => setStatusFilter(option.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    statusFilter === option.value
                      ? 'bg-[#1a3a52] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#1a3a52] border-t-transparent"></div>
            </div>
          ) : filteredAppointments.length === 0 ? (
            <div className="text-center py-20">
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">لا توجد مواعيد</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">المريض</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">التاريخ والوقت</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">الخدمة</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">الحالة</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredAppointments.map((appointment) => (
                    <tr key={appointment.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold text-gray-900">{appointment.name}</div>
                          <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                            <Phone className="w-3 h-3" />
                            {appointment.phone}
                          </div>
                          {appointment.email && (
                            <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                              <Mail className="w-3 h-3" />
                              {appointment.email}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Calendar className="w-4 h-4" />
                          {appointment.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                          <Clock className="w-3 h-3" />
                          {appointment.time}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] px-3 py-1 rounded-full text-sm font-medium">
                          {appointment.service}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={appointment.status}
                          onChange={(e) => updateAppointmentStatus(appointment.id, e.target.value)}
                          className={`px-3 py-1 rounded-lg text-sm font-medium border-2 cursor-pointer ${statusColors[appointment.status]}`}
                        >
                          <option value="pending">معلق</option>
                          <option value="confirmed">مؤكد</option>
                          <option value="cancelled">ملغي</option>
                          <option value="completed">مكتمل</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setSelectedAppointment(appointment)}
                          className="text-[#1a3a52] hover:text-[#c8a882] font-medium transition-colors ml-2"
                        >
                          عرض التفاصيل
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedAppointment(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#1a3a52] text-white p-6 rounded-t-2xl">
              <h2 className="text-2xl font-bold">تفاصيل الموعد</h2>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Patient Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">معلومات المريض</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="font-medium">{selectedAppointment.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <a href={`tel:${selectedAppointment.phone}`} className="text-[#1a3a52] hover:underline">{selectedAppointment.phone}</a>
                  </div>
                  {selectedAppointment.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <a href={`mailto:${selectedAppointment.email}`} className="text-[#1a3a52] hover:underline">{selectedAppointment.email}</a>
                    </div>
                  )}
                </div>
              </div>

              {/* Appointment Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">تفاصيل الموعد</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">التاريخ</div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{selectedAppointment.date}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">الوقت</div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{selectedAppointment.time}</span>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-sm text-gray-600 mb-1">الخدمة المطلوبة</div>
                    <span className="inline-block bg-[#1a3a52] text-white px-4 py-2 rounded-lg font-medium">
                      {selectedAppointment.service}
                    </span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {selectedAppointment.notes && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ملاحظات إضافية</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{selectedAppointment.notes}</p>
                  </div>
                </div>
              )}

              {/* Status */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">الحالة الحالية</h3>
                <span className={`inline-block px-4 py-2 rounded-lg text-sm font-medium border-2 ${statusColors[selectedAppointment.status]}`}>
                  {statusOptions.find(s => s.value === selectedAppointment.status)?.label}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <button
                  onClick={() => deleteAppointment(selectedAppointment.id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-5 h-5" />
                  حذف الموعد
                </button>
                <button
                  onClick={() => setSelectedAppointment(null)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;