<template>
  <div style="width: 100%;">
    <div v-for="(item, index) in list" class="ach" v-tooltip="achDict.find(x => x.image === item).text">
      <img :src="require(`@/static/imgs/ach/${item}.png`)" class="img" />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['list'],
    data: () => ({
      achDict: [
        {
          image: 'badboy',
          text: 'Этим определенно не стоит гордиться. Надеемся, Вы станете лучше.'
        },
        {
          image: 'curious_1',
          text: 'Первая подписка - всегда волнительно! Дарим Вам такую ракету, которая символизирует хороший старт.'
        },
        {
          image: 'curious_5',
          text: 'Пять подписок это уже совсем внушительно. Это определенно лойс.'
        },
        {
          image: 'curious_10',
          text: 'Держите сертификат самого упорного подписчика. Вы его заслужили.'
        },
        {
          image: 'cyberpunk',
          text: 'Будущее сегодня.'
        },
        {
          image: 'king',
          text: 'Забаним в этой системе всех, кто не будет называть Вас величайшим, величайший.'
        },
        {
          image: 'leader',
          text: 'В придачу к этой ачивке можно смело давать флаг и коня, но нам не хватило денег.'
        },
        {
          image: 'month_user',
          text: 'Спасибо за месяц с нами. Мы Вас очень ценим!'
        },
        {
          image: 'month_user',
          text: 'Спасибо за месяц с нами. Мы Вас очень ценим!'
        },
        {
          image: 'new_user',
          text: 'Оу, привет. Один шарик сразу, другой дадим после того, как приведешь друга.'
        },
        {
          image: 'real_curious',
          text: 'Взгляните на него. Да ведь он... ...Подпсиался на всех!'
        },
        {
          image: 'real_vol',
          text: 'Благодаря Вам этот мир стал лучше. Мы Вами гордимся.'
        },
        {
          image: 'respect',
          text: 'Респект от разработчиов. Для таких как ты мы создавали эту систему.'
        },
        {
          image: 'vol_1',
          text: 'Небольшая медаль, за начало больших дел.'
        },
        {
          image: 'vol_5',
          text: 'Держи динозавра.'
        },
        {
          image: 'year_user',
          text: 'C годом совместной жизни! И Вас, и нас.'
        },
        {
          image: 'vol_10',
          text: 'Этот каменный мужчина гордится тобой!'
        }
      ]
    })
  }
</script>

<style scoped lang="scss">
  .ach {
    width: calc(12.5% - 10px);
    margin: 5px;
    display: inline-block;
    .img {
      width: 100%;
    }
  }
</style>
