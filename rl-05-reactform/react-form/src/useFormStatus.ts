import { useState } from 'react';

// Custom hook to manage form status (idle, submitting, success, error)
export function useFormStatus() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  function startSubmitting() {
    setStatus('submitting');
    setError(null);
  }

  function setSuccess() {
    setStatus('success');
    setError(null);
  }

  function setErrorStatus(message: string) {
    setStatus('error');
    setError(message);
  }

  function resetStatus() {
    setStatus('idle');
    setError(null);
  }

  return { status, error, startSubmitting, setSuccess, setErrorStatus, resetStatus };
}
