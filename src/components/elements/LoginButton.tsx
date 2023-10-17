import React from 'react';
import { useSession, signIn } from 'next-auth/react';

export default function LoginButton() {
	const { data: session, status } = useSession();
  const handleGoogleLogin = () => {
    signIn('google', {}, { prompt: 'login' })
  }

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (status !== 'authenticated') {
		return (
			<div>
				<button onClick={handleGoogleLogin} className="text-sm font-semibold leading-6 text-gray-900">
					Log in <span aria-hidden="true">&rarr;</span>
				</button>
			</div>
		);
	}
	return null;
}
