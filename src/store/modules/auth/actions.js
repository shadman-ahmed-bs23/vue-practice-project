export default {
	async login(context, payload) {
		const response = await fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3nZpXHxMNxzbtROLYDReHUzb5c99qswI`,
			{
				method: 'POST',
				body: JSON.stringify({
					email: payload.email,
					password: payload.password,
					returnSecureToken: true,
				}),
			}
		);

		const responseData = await response.json();

		if (!response.ok) {
			console.log(responseData);
			const error = new Error(responseData.message || 'Failed to authenticate');
			throw error;
		}
		localStorage.setItem('token', responseData.idToken);
		localStorage.setItem('id', responseData.localId);
		context.commit('setUser', {
			token: responseData.idToken,
			userId: responseData.localId,
			tokenExpiration: responseData.expiresIn,
		});
	},
	async signup(context, payload) {
		const response = await fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3nZpXHxMNxzbtROLYDReHUzb5c99qswI`,
			{
				method: 'POST',
				body: JSON.stringify({
					email: payload.email,
					password: payload.password,
					returnSecureToken: true,
				}),
			}
		);

		const responseData = await response.json();

		if (!response.ok) {
			console.log(responseData);
			const error = new Error(responseData.message || 'Failed to authenticate');
			throw error;
		}
		localStorage.setItem('token', responseData.idToken);
		localStorage.setItem('id', responseData.localId);
		context.commit('setUser', {
			token: responseData.idToken,
			userId: responseData.localId,
			tokenExpiration: responseData.expiresIn,
		});
	},
	logout(context) {
		localStorage.removeItem('token');
		localStorage.removeItem('id');
		context.commit('setUser', {
			token: null,
			userId: null,
			tokenExpiration: null,
		});
	},
};
