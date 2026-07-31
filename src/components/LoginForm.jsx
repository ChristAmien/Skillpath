import React, { useState } from 'react'
import { RiLoginBoxLine } from '@remixicon/react'

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [status, setStatus] = useState(null) // null | 'sending' | 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        // TODO: remplace par ton vrai appel d'authentification (API, Firebase, Supabase...)
        setTimeout(() => {
            setStatus(null)
        }, 1000)
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2'>
                    Email Address
                </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='john@example.com'
                    className='w-full px-4 py-3.5 rounded-md border border-white-95 bg-white outline-none focus:border-orange-50 transition-colors'
                />
            </div>

            <div>
                <label htmlFor='password' className='block text-sm font-medium mb-2'>
                    Password
                </label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='••••••••'
                    className='w-full px-4 py-3.5 rounded-md border border-white-95 bg-white outline-none focus:border-orange-50 transition-colors'
                />
            </div>

            <button
                type='submit'
                disabled={status === 'sending'}
                className='primary-btn w-full flex items-center justify-center gap-2 disabled:opacity-60'
            >
                {status === 'sending' ? 'Connexion...' : 'Se connecter'}
                <RiLoginBoxLine size={18} />
            </button>

            {status === 'error' && (
                <p className='text-red-600 text-sm'>
                    Identifiants incorrects. Veuillez réessayer.
                </p>
            )}
        </form>
    )
}