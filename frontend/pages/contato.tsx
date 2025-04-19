import { NextPage } from 'next';
import { useState } from 'react';
import api from '../utils/api';

const Contact: NextPage = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await api.post('/contact', data);
      setStatus('Mensagem enviada com sucesso!');
      setData({ name: '', email: '', message: '' });
    } catch {
      setStatus('Erro ao enviar.');
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input type="text" placeholder="Nome" className="w-full p-2 border" value={data.name} onChange={e => setData({...data, name: e.target.value})}/>
        <input type="email" placeholder="Email" className="w-full p-2 border" value={data.email} onChange={e => setData({...data, email: e.target.value})}/>
        <textarea placeholder="Mensagem" className="w-full p-2 border" rows={4} value={data.message} onChange={e => setData({...data, message: e.target.value})}/>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Enviar</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
);

export default Contact;