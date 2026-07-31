import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { LoginForm } from '../components/LoginForm'

export const Login = () => {
    return (
        <div>
            <Header />
            <main>
                <section className='py-20'>
                    <div className='container max-w-md mx-auto'>
                        <h1 className='text-3xl font-semibold mb-2 text-center'>
                            Connexion
                        </h1>
                        <p className='text-center text-white-40 mb-8'>
                            Entrez vos identifiants pour accéder à votre compte
                        </p>
                        <LoginForm />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}