<template>
  <div class="x-date-picker" :style="computedColors">
    <div class="x-date-viewer" @click="dialog = true" v-ripple>
      <x-icon name="date_range" ir />
      <div class="text-date">{{ dateViewer(value) }}</div>
    </div>
    <transition name="to-opaque">
      <div v-if="dialog" class="x-shadow" @click="endPick">
        <div class="x-date-picker-dialog" @click.stop>
          <x-card
            pa="20px"
            elev="3"
            color="white"
            rounded
            class="card"
          >
            <div class="tiles-container" v-if="whatChoose === 'day'">
              <div class="picker-controls">
                <div class="btn" @click="decMonth">
                  <x-icon name="navigate_before" />
                </div>
                <div class="month" @click="whatChoose = 'year'">
                  {{ months[month] }}, {{year}}
                </div>
                <div class="btn" @click="incMonth">
                  <x-icon name="navigate_next" />
                </div>
              </div>
              <div class="day" v-for="day in days">{{ day }}</div>
              <div
                class="tile empty"
                v-for="i in indent(add0s(`${year}`, 4) + '-' + add0s(`${month + 1}`, 2) + '-01')"
                :key="`empty${i}`"
              >
                i
              </div>
              <div
                :class="`tile${date.year === year && date.month === month && date.day === i ? ' chosen' : ''}`"
                v-for="i in daysInMonth"
                @click="() => chooseDay(i)"
                :key="`day${i}`"
              >{{
                i
              }}</div>
            </div>
            <div class="year-picker" v-if="whatChoose === 'year'">
              <div
                v-for="i in 101"
                @click="() => chooseYear(1969 + i)"
                :class="`year ${year === (1969 + i) ? ' chosen' : ''}`"
              >
                {{ 1969 + i }}
              </div>
            </div>

            <div class="month-picker" v-if="whatChoose === 'month'">
              <div
                v-for="(i, index) in monthsShort"
                @click="() => chooseMonth(index)"
                :class="`month ${month === index ? ' chosen' : ''}`"
              >
                {{ i }}
              </div>
            </div>

          </x-card>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>

  // date format yyyy-mm-dd : String

  export default {
    props: ['value', 'color', 'caption', 'width'],
    data: () => ({
      dialog: false,
      days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
      month: 0,
      year: 1970,
      whatChoose: 'day'
    }),
    methods: {
      indent(dateString) {
        let date = new Date(dateString);
        if (date.getDay() === 0) return 6;
        return date.getDay() - 1;
      },
      startPick() {
        this.dialog = true;
      },
      endPick() {
        this.dialog = false;
      },
      incMonth() {
        this.month += 1;
        if (this.month === 12) {
          this.year += 1;
          this.month = 0;
        }
      },
      decMonth() {
        this.month -= 1;
        if (this.month === -1) {
          this.year -= 1;
          this.month = 11;
        }
      },
      add0s(string, goal) {
        let result = string;
        for (let i = 0; i < goal - string.length; i += 1) {
          result = '0' + result;
        }
        return result;
      },
      chooseDay(day) {
        this.insideValue = this.add0s(`${this.year}`, 4) + '-' + this.add0s(`${this.month + 1}`, 2) + '-' + this.add0s(`${day}`, 2);
        this.dialog = false;
      },
      chooseYear(year) {
        this.year = year;
        this.whatChoose = 'month';
      },
      chooseMonth(month) {
        this.month = month;
        this.whatChoose = 'day';
      },
      dateViewer(date) {
        if (!date || !this.valid(date)) {
          return this.caption || 'Выбрать дату';
        }
        let pieces = date.split('-');
        let string = `${pieces[2]} ${this.monthsShort[pieces[1] - 1]} ${pieces[0]}`;
        return string;
      },
      valid(value) {
        let pieces = value.split('-');
        if (
            Number(pieces[0]) === Number(pieces[0]) &&
            Number(pieces[1]) > 0 && Number(pieces[1]) < 13 &&
            Number(pieces[2]) > 0 && Number(pieces[2] < 32)
        ) {
          return true;
        }
        return false;
      }
    },
    computed: {
      computedColors() {
        let style = {};
        if (this.width) {
          style.width = this.width;
        }
        style['--picker-color'] = this.color || 'pink';
        return style;
      },
      daysInMonth() {
        if ([0, 2, 4, 6, 7, 9, 11].includes(this.month)) {
          return 31;
        }
        if ([3, 5, 8, 10].includes(this.month)) {
          return 30;
        }
        if (this.month === 1) {
          if ((this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0) {
            return 29;
          }
          return 28;
        }
      },
      insideValue: {
        get() {
          if (this.value && this.valid(this.value)) {
            let trueDate = this.value;
            this.year = Number(trueDate.split('-')[0]);
            this.month = Number(trueDate.split('-')[1]) - 1;
            this.$emit('input', trueDate);
            return trueDate;
          } else {
            let trueDate = (new Date()).toISOString().split('T')[0];
            this.year = Number(trueDate.split('-')[0]);
            this.month = Number(trueDate.split('-')[1]) - 1;
          }
        },
        set(value) {
          this.$emit('input', value);
        }
      },
      date() {
        let parts = (this.insideValue || '').split('-');
        return {
          year: parts[0] ? Number(parts[0]) : 1970,
          month: parts[1] ? Number(parts[1]) - 1 : 1,
          day: parts[2] ? Number(parts[2]) : 1
        };
      }
    }
  }
</script>

<style scoped lang="scss">
  $dateColor: var(--picker-color);

  .caption {
    margin-right: 5px;
    color: $borderColor;
  }

  .x-date-picker {
    position: relative;
    .x-date-viewer {
      width: calc(100% - 26px);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      padding-left: 12px;
      padding-right: 12px;
      height: calc(44px - 10px);
      border-radius: 5px;
      border: 1px solid $borderColor;
    }
  }

  .chosen {
    background-color: $dateColor;
    color: white;
  }

  .empty {
    background-color: white;
    color: white;
    cursor: default !important;
    &:hover {
      border: 2px solid white !important;
    }
  }

  .x-date-picker-dialog {
    user-select: none;
    .card {
      width: 280px;
      height: 320px;

      .year-picker {
        overflow-y: scroll;
        width: 100%;
        .year {
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          cursor: pointer;
          border: 2px solid white;
          transition: 0.3s;
          &:hover {
            border: 2px solid $dateColor;
          }
        }
      }

      .month-picker {
        width: 100%;
        .month {
          text-transform: capitalize;
          height: 76px;
          width: calc(33.3333% - 4px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          cursor: pointer;
          border: 2px solid white;
          transition: 0.3s;
          &:hover {
            border: 2px solid $dateColor;
          }
        }
      }

      .tiles-container {
        display: block;
        .picker-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          .month {
            width: calc(71.4285% - 4px);
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            border: 2px solid white;
            transition: 0.3s;
            &:hover {
              border: 2px solid $dateColor;
            }
          }
          .btn {
            width: calc(14.2857% - 4px);
            height: 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            cursor: pointer;
            border: 2px solid white;
            transition: 0.3s;
            &:hover {
              border: 2px solid $dateColor;
            }
          }
        }
        .day {
          width: 14.2857%;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          cursor: default;
          font-weight: bold;
        }
        .tile {
          width: calc(14.2857% - 4px);
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          cursor: pointer;
          border: 2px solid white;
          transition: 0.3s;
          &:hover {
            border: 2px solid $dateColor;
          }
        }
      }
    }
  }

  .x-shadow {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 80;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .to-opaque-enter-active {
    transition: all .3s ease-in-out;
  }
  .to-opaque-leave-active {
    transition: all .3s ease-in-out;
  }
  .to-opaque-enter, .to-opaque-leave-to {
    opacity: 0;
  }
</style>
