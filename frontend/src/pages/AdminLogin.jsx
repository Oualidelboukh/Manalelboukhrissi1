const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await axios.post(`${API}/admin/login`, formData);

    if (response.data.access) {
      toast.success('تم تسجيل الدخول بنجاح!');
      navigate('/admin/dashboard');
    } else {
      toast.error('خطأ في اسم المستخدم أو كلمة المرور');
    }

  } catch (error) {
    console.error('Login error:', error);
    toast.error(error.response?.data?.detail || 'خطأ في اسم المستخدم أو كلمة المرور');
  } finally {
    setIsLoading(false);
  }
};
