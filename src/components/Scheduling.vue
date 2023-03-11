<template>
  <div class="health">
    <h3>Times needed to help with Grandma</h3>
  </div>
  <vue-cal
    style="height: 500px"
    hide-view-selector
    active-view="week"
    xsmall
    :disable-views="['years', 'year']"
    :events="events"
    :on-event-click="onEventClick"
    :time-from="5 * 60"
    :time-to="23 * 60"
  />
  <GDialog v-model="showDialog"
    ><div class="wrapper">
      <div class="content">
        <div v-if="selectedEvent.helper">
          <div class="title">Assigned Helper</div>
          <p>
            {{ selectedEvent.helper }}
          </p>
        </div>
        <div v-else>
          <div class="title">Input Name of Helper</div>
          <input />
        </div>
      </div>

      <div class="actions">
        <button class="btn btn--outline-gray" @click="showDialog = false">
          Ok
        </button>
      </div>
    </div></GDialog
  >
</template>

<script>
import { ref, computed } from 'vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import { getEvents } from '../scripts/db.js';

export default {
  components: {
    VueCal,
  },
  setup() {
    let showDialog = ref(false);
    let selectedEvent = ref({});

    let events = computed(() => {
      let dbEvents = getEvents();
      console.log(dbEvents);
      let newEvents = [];
      for (var e of dbEvents) {
        newEvents.push({
          start: new Date(e.start),
          end: new Date(e.end),
          class: e.class,
          helper: e.helper,
        });
      }
      return newEvents;
    });

    function onEventClick(event, e) {
      selectedEvent.value = event;
      showDialog.value = true;
      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation();
    }

    return {
      showDialog,
      selectedEvent,
      events,
      onEventClick,
    };
  },
};
</script>

<style scoped>
.wrapper {
  color: #000;
}

.content {
  padding: 20px;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
<style>
.vuecal__event.available {
  background-color: tomato;
}
.vuecal__event.selected {
  background-color: springgreen;
}
</style>
