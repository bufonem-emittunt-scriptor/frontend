import { api } from '@/services/api';

export default {
  state: {
    posts: [
      {
        postTitle: 'Открытие музея после реставрации',
        museumName: 'Политехнический музей',
        eventId: 24,
        museumId: 23,
        postImage: 'https://cdn22.img.ria.ru/images/155592/13/1555921321_0:0:1360:765_600x0_80_0_0_e14a312344b309ef557d1bda4dbe1a6c.jpg',
        museumAvatar: 'http://public.superjob.ru/images/clients_logos.ru/2246264_e2b7272827d530112d0c686cb4058266.jpg'
      },
      {
        postTitle: 'Открытие музея после реставрации',
        museumName: 'Политехнический музей',
        eventId: 24,
        museumId: 23,
        postImage: 'https://cdn22.img.ria.ru/images/155592/13/1555921321_0:0:1360:765_600x0_80_0_0_e14a312344b309ef557d1bda4dbe1a6c.jpg',
        museumAvatar: 'http://public.superjob.ru/images/clients_logos.ru/2246264_e2b7272827d530112d0c686cb4058266.jpg'
      },
      {
        postTitle: 'Открытие музея после реставрации',
        museumName: 'Политехнический музей',
        eventId: 24,
        museumId: 23,
        postImage: 'https://cdn22.img.ria.ru/images/155592/13/1555921321_0:0:1360:765_600x0_80_0_0_e14a312344b309ef557d1bda4dbe1a6c.jpg',
        museumAvatar: 'http://public.superjob.ru/images/clients_logos.ru/2246264_e2b7272827d530112d0c686cb4058266.jpg'
      }
    ]
  },
  actions: {
    getAllPosts({commit, dispatch}) {
      commit('setLoading', true);
      api.get('/posts')
      .then(response => {
        commit('savePosts', response.data.objects);
      })
      .catch(error => {

      })
      .finally(() => {
        commit('setLoading', false);
      });
    },
    getSubscriptions({commit, dispatch}, volunteerId) {
      commit('setLoading', true);
      api.get('/posts')
      .then(response => {
        commit('savePosts', response.data.objects);
      })
      .catch(error => {

      })
      .finally(() => {
        commit('setLoading', false);
      });
    },
    getMuseumPost({commit, dispatch}, museumId) {
      commit('setLoading', true);
      api.get('/posts')
      .then(response => {
        commit('savePosts', response.data.objects);
      })
      .catch(error => {

      })
      .finally(() => {
        commit('setLoading', false);
      });
    }
  },
  mutations: {
    savePosts(state, posts) {
      state.posts = posts;
    }
  },
};
