

import { useForm } from './useForm';
import { useFormStatus } from './useFormStatus';
import './App.css';

function App() {
  // Example 1: useForm only
  const { values, handleChange, resetForm } = useForm({ name: '', email: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Name: ${values.name}\nEmail: ${values.email}`);
    resetForm();
  }

  // Example 2: useForm with useFormStatus
  const { values: values2, handleChange: handleChange2, resetForm: resetForm2 } = useForm({ username: '', password: '' });
  const formStatus = useFormStatus();

  async function handleStatusSubmit(e: React.FormEvent) {
    e.preventDefault();
    formStatus.startSubmitting();
    // Simulate async validation
    await new Promise((res) => setTimeout(res, 1200));
    if (values2.username === 'admin' && values2.password === 'admin') {
      formStatus.setSuccess();
      resetForm2();
    } else {
      formStatus.setErrorStatus('Invalid username or password');
    }
    setTimeout(() => formStatus.resetStatus(), 2000);
  }

  return (
    <>
      <div className="form-container">
        <h2>useForm Example</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
        <pre style={{ background: '#f6f8fa', padding: 10, marginTop: 16, borderRadius: 6 }}>
          {JSON.stringify(values, null, 2)}
        </pre>
      </div>

      <div className="form-container" style={{ marginTop: 32 }}>
        <h2>useForm + useFormStatus</h2>
        <form onSubmit={handleStatusSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              name="username"
              value={values2.username}
              onChange={handleChange2}
              autoComplete="off"
              disabled={formStatus.status === 'submitting'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              value={values2.password}
              onChange={handleChange2}
              autoComplete="off"
              disabled={formStatus.status === 'submitting'}
            />
          </div>
          <div className="form-actions">
            <button type="submit" disabled={formStatus.status === 'submitting'}>
              {formStatus.status === 'submitting' ? 'Logging in...' : 'Login'}
            </button>
            <button type="button" onClick={resetForm2} disabled={formStatus.status === 'submitting'}>
              Reset
            </button>
          </div>
        </form>
        {formStatus.status === 'success' && (
          <div style={{ color: '#22c55e', marginTop: 12, fontWeight: 600 }}>Login successful!</div>
        )}
        {formStatus.status === 'error' && (
          <div style={{ color: '#ef4444', marginTop: 12, fontWeight: 600 }}>{formStatus.error}</div>
        )}
        <pre style={{ background: '#f6f8fa', padding: 10, marginTop: 16, borderRadius: 6 }}>
          {JSON.stringify(values2, null, 2)}
        </pre>
      </div>
    </>
  );
}

export default App
