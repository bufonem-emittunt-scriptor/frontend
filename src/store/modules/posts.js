import { api } from '@/services/api';

export default {
  state: {
    post: {},
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
        postTitle: 'Выставка «Русский Йорданс»',
        museumName: 'Пушкинский музей',
        eventId: 24,
        museumId: 23,
        postImage: 'https://pushkinmuseum.art/events/archive/2019/exhibitions/jordaens/11468_mainfoto_03.jpg',
        museumAvatar: 'https://storage.theoryandpractice.ru/tnp/uploads/image_logo/000/022/977/image/d38c7bc191.jpg'
      },
      {
        postTitle: 'Выставка «Дикий подводный мир»',
        museumName: 'ГОСУДАРСТВЕННЫЙ ДАРВИНОВСКИЙ МУЗЕЙ',
        eventId: 24,
        museumId: 23,
        postImage: 'http://www.darwinmuseum.ru/pictures/big_cfb80392d9.jpg',
        museumAvatar: 'http://www.museum.ru/imgB.asp?41593'
      }
    ]
  },
  actions: {
    getPost({commit}, id) {
      commit('setLoading', true);
      api.get('/posts/' + id)
      .then(response => {
        commit('savePost', response.data);
      })
      .catch(error => {

      })
      .finally(() => {
        commit('setLoading', false);
      });
    },
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
    },
    savePost(state, post) {
      state.post = post;
    }
  },
};
