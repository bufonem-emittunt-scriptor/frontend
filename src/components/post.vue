<template>
  <div class="post">
    <x-card
      elev="5"
      customround="10px"
      ma="0 0 16px 0"
      pa="0px"
      class="card"
    >
      <div class="shadow" />
      <div class="down-shadow" />
      <div class="dark-container" />

      <div class="post-info">
        <div class="museum-avatar" @click="() => goMuseum(post.museumId)">
          <img
            class="image"
            :src="post.museumAvatar"
          />
        </div>
        <div class="event-info">
          <div class="event-name">
            {{ post.postTitle }}
          </div>
          <div class="museum" @click="() => goMuseum(post.museumId)">
            {{ post.museumName }}
          </div>
        </div>

      </div>

      <div class="post-controls">
        <x-button
          color="white"
          style="margin-bottom: 20px; margin-right: 10px;"
          class="button"
          @click="() => takePart(post.eventId)"
          v-if="cantGo == null && guest == null"
        >
          <x-icon name="directions_run" ir />
          <span>Я пойду</span>
        </x-button>
        <x-button
          color="rgb(255, 100 ,100)"
          style="margin-bottom: 20px; margin-right: 10px;"
          class="button"
          dark
          @click="() => deleteEvent(post.eventId)"
          v-if="cantGo != null && guest == null"
        >
          <x-icon name="close" ir />
          <span>Удалить</span>
        </x-button>
        <x-button
          color="white"
          :style="`margin-bottom: 20px; margin-left: ${guest == null ? 10 : 0}px;`"
          class="button"
          @click="() => goEvent(post.eventId)"
        >
          <x-icon name="menu_book" ir />
          <span>Описание</span>
        </x-button>
      </div>


      <div class="image-container">
        <img
          class="image"
          :src="post.postImage"
        />
      </div>

    </x-card>
  </div>
</template>

<script>
  export default {
    props: ['post', 'cantGo', 'guest'],
    methods: {
      goMuseum(id) {
        this.$router.push('/museum/' + id);
      },
      goEvent(id) {
        this.$router.push('/event/' + id);
      },
      deleteEvent(id) {

      },
      takePart(id) {

      }
    }
  }
</script>

<style scoped lang="scss">
  .post {
    position: relative;
    .card {

      .shadow {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        box-shadow: inset 0px 142px 153px -99px rgba(0,0,0,1);
      }

      .down-shadow {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        box-shadow: inset 0px -142px 153px -99px rgba(0,0,0,1);
      }


      .image-container {
        width: 100%;
        .image {
          width: 100%;
          display: block;
          max-height: 460px;
        }

      }

      .dark-container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        transition: 0.7s;
        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }

      .post-controls {
        position: absolute;
        bottom: 0px;
        left: 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        .button {
          width: 160px;
        }
      }

      .post-info {
        position: absolute;
        top: 0px;
        left: 0px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: calc(100% - 40px);
        padding: 20px;
        .event-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          .event-name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            min-width: 0px;
            color: white;
            font-size: 28px;
            margin-bottom: 5px;
          }
          .museum {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: white;
            font-size: 16px;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        .museum-avatar {
          width: 80px;
          overflow: hidden;
          height: 80px;
          background-color: white;
          border-radius: 50%;
          background-color: white;
          margin-right: 20px;
          cursor: pointer;
          .image {
            width: 100%;
            display: block;
          }
          box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .12), 0 1px 8px 0 rgba(0, 0, 0, .20);
          transition: 0.7s;
          &:hover {
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .20);
          }
        }
      }

    }
  }

  @media only screen and (max-width: 420px) {
    .post {
      .card {
        .shadow {
          box-shadow: inset 0px 90px 153px -99px rgba(0,0,0,1);
        }
        .down-shadow {
          box-shadow: inset 0px -90px 153px -99px rgba(0,0,0,1);
        }
        .post-controls {
          .button {
            width: 120px;
          }

        }
        .post-info {
          .museum-avatar {
            width: 40px;
            height: 40px;
            margin-right: 10px;
          }
          .event-info {
            .event-name {
              font-size: 16px;
            }
            .museum {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

</style>
