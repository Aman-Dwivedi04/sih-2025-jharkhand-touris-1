}export const AuthLayout = () => {
	return (
		<div>AuthLayout</div>
	)
}
// File: src/components/layouts/AuthLayout/AuthLayout.tsx
import React from 'react'
import styles from './AuthLayout.module.css'

interface AuthLayoutProps {
	side?: React.ReactNode
	children: React.ReactNode
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ side, children }) => {
	return (
		<div className={styles.container}>
			<aside className={styles.side}>
				{side ?? (
					<div className={styles.sideInner}>
						<h1>Welcome</h1>
						<p>Access your account, manage settings, and enjoy the app.</p>
					</div>
				)}
			</aside>

			<main className={styles.main}>
				<div className={styles.formWrap}>
					{children}
				</div>
			</main>
		</div>
	)
}

// File: src/components/layouts/AuthLayout/AuthLayout.module.css
/*
Place this file next to the component as AuthLayout.module.css
*/
.container {
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
}

/* Left column (illustration / marketing) */
.side {
	background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%);
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 48px;
}

.sideInner {
	max-width: 420px;
}

/* Right column (form) */
.main {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 48px;
	background: #fff;
}

.formWrap {
	width: 100%;
	max-width: 420px;
}

/* Responsive: stack columns on small screens */
@media (max-width: 768px) {
.container {
		grid-template-columns: 1fr;
	}
.side {
		display: none; /* hide illustration on small screens, or change as needed */
	}
}

// File: src/pages/Login.tsx
import React from 'react'
import { AuthLayout } from '../components/layouts/AuthLayout/AuthLayout'

export const Login: React.FC = () => {
	return (
		<AuthLayout
			side={
				<div>
					<h2>Sign in</h2>
					<p>Enter your credentials to continue.</p>
				</div>
			}
		>
			<form>
				<h3>Login</h3>
				<label>
					Email
					<input type="email" required />
				</label>
				<label>
					Password
					<input type="password" required />
				</label>
				<button type="submit">Sign in</button>
			</form>
		</AuthLayout>
	)
}

// File: src/pages/Register.tsx
import React from 'react'
import { AuthLayout } from '../components/layouts/AuthLayout/AuthLayout'

export const Register: React.FC = () => {
	return (
		<AuthLayout
			side={
				<div>
					<h2>Create account</h2>
					<p>Join and start using the app today.</p>
				</div>
			}
		>
			<form>
				<h3>Register</h3>
				<label>
					Name
					<input type="text" required />
				</label>
				<label>
					Email
					<input type="email" required />
				</label>
				<label>
					Password
					<input type="password" required />
				</label>
				<button type="submit">Create account</button>
			</form>
		</AuthLayout>
	)




