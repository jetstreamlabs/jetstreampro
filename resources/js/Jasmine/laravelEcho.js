import Echo from 'laravel-echo';
import Larasocket from 'larasocket-js';

const echo = new Echo({
	broadcaster: Larasocket,
	token: import.meta.env.VITE_LARASOCKET_TOKEN,
	namespace: 'App.Domain.Events',
	authorizer: (channel, options) => {
		return {
			authorize: (socketId, callback) => {
				axios
					.post('/api/broadcasting/auth', {
						socket_id: socketId,
						channel_name: channel.name,
					})
					.then((response) => {
						callback(false, response.data);
					})
					.catch((error) => {
						callback(true, error);
					});
			},
		};
	},
	debug: false,
});

export default { echo };
