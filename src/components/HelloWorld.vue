<template>
  <div>
    <div>
      <aside>
        <div class="sidenav">
          <img src="../assets/andy.jpg" class="Avatar" />
          <br />
          <p>Andy Ivor</p>

          <a href> <i class="pi pi-home"></i> HOME </a>
          <a href> <i class="pi pi-user"></i> PROFILE </a>
          <a href> <i class="pi pi-calendar-plus"></i> CALENDER </a>
        </div>
      </aside>
    </div>
    <div>
      <main>
        <div class="mainContent">
          <TabMenu :model="items" />

          <router-view />
        </div>
        <div class="p-grid">
          <div class="p-col">
            <Card>
              <template slot="title">IOS development</template>
              <template slot="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
              </template>
            </Card>
          </div>
          <div class="p-col">
            <Card>
              <template slot="title">Android Dev</template>
              <template slot="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
              </template>
            </Card>
          </div>
          <div class="p-col">
            <Card>
              <template slot="title">Reports</template>
              <template slot="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
              </template>
            </Card>
          </div>
          <div class="p-col">
            <Card>
              <template slot="title">Web projects</template>
              <template slot="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
              </template>
            </Card>
          </div>
        </div>
        <!-- chart view -->
        <div class="p-grid nested-grid">
          <div class="p-col-4">
            <Card>
              <template slot="content">
                <h3>Companies</h3>
                <Chart type="doughnut" :data="chartData" />
              </template>
            </Card>
          </div>
          <div class="p-col-8">
            <Card>
              <template slot="content">
                <h3>Line Styles</h3>
                <Chart type="line" :data="lineStylesData" />
              </template>
            </Card>
          </div>
        </div>
        <!-- After charts -->
        <div class="p-grid nested-grid">
          <div class="p-col-6 txt">
            <Card>
              <template slot="title" class="txt-title">Comments</template>
              <template slot="content">
                <Textarea
                  v-model="value"
                  :autoResize="true"
                  rows="6"
                  cols="50"
                />
                <br />
                <div class="bttns">
                  <Button label="Submit" @click="showSuccess" />
                  <Button
                    label="Delete"
                    class="p-button-danger"
                    icon="pi pi-trash"
                    @click="openConfirmation"
                  />
                </div>
              </template>
            </Card>
          </div>
          <div class="p-col-6">
            <Card>
              <template slot="title">
                Calender
              </template>
              <template slot="content">
                <FullCalendar :events="events" :options="options" />
              </template>
            </Card>
          </div>
        </div>
        <Toast />
        <!-- Dialog -->
        <Dialog
          header="Confirmation"
          :visible.sync="displayConfirmation"
          :style="{ width: '350px' }"
          :modal="true"
        >
          <div class="confirmation-content">
            <i
              class="pi pi-exclamation-triangle p-mr-3"
              style="font-size: 2rem"
            />
            <span>Are you sure you want to proceed?</span>
          </div>
          <template #footer>
            <Button
              label="No"
              icon="pi pi-times"
              @click="closeConfirmation"
              class="p-button-text"
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              @click="closeConfirmation"
              class="p-button-text"
              autofocus
            />
          </template>
        </Dialog>
      </main>
    </div>
  </div>
</template>

<script>
import TabMenu from "primevue/tabmenu";
import Card from "primevue/card";
import Chart from "primevue/chart";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Toast from "primevue/toast";
import Dialog from "primevue/dialog";
import FullCalendar from "primevue/fullcalendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  name: "HelloWorld",

  data() {
    return {
      displayConfirmation: false,
      position: "center",
      messages: [],
      chartData: {
        labels: ["Apple", "Google", "Microsoft"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
            hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"],
          },
        ],
      },
      options: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultDate: "2019-01-01",
        header: {
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        editable: true,
      },
      events: null,
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
        {
          label: "Calendar",
          icon: "pi pi-fw pi-calendar",
          to: "/tabmenu/calendar",
        },
        { label: "Edit", icon: "pi pi-fw pi-pencil", to: "/tabmenu/edit" },
        {
          label: "Documentation",
          icon: "pi pi-fw pi-file",
          to: "/tabmenu/documentation",
        },
        { label: "Settings", icon: "pi pi-fw pi-cog", to: "/tabmenu/settings" },
      ],
      lineStylesData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "#42A5F5",
          },
          {
            label: "Second Dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderDash: [5, 5],
            borderColor: "#66BB6A",
          },
          {
            label: "Third Dataset",
            data: [12, 51, 62, 33, 21, 62, 45],
            fill: true,
            borderColor: "#FFA726",
            backgroundColor: "rgba(255,167,38,0.2)",
          },
        ],
      },
    };
  },
  eventService: null,

  methods: {
    showSuccess() {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        life: 3000,
      });
    },
    openConfirmation() {
      this.displayConfirmation = true;
    },
    closeConfirmation() {
      this.displayConfirmation = false;
    },
  },
  components: {
    TabMenu,
    Card,
    Chart,
    Textarea,
    Button,
    Toast,
    Dialog,
    FullCalendar,
  },
};
</script>

<style scoped lang="scss">
div {
  margin: 0;
}
aside {
  height: 100vh;
  width: 230px;
  border-style: solid;
  border: 1px;
  background-color: #8c57e9;
  margin: 0;
  position: fixed;
  color: #fff;
}
.sidenav a {
  padding: 5px 8px 6px 0px;
  text-decoration: none;
  font-size: 15px;
  color: #fff;
  display: block;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
  box-sizing: border-box;
  line-height: 30px;
  transition: 0.5;
}
.sidenav a:hover {
  color: #f18ec4;
}

main {
  position: absolute;
  left: 230px;
  margin-right: 10px;
  width: 82%;
  margin-left: 0px;
  background-color: rgba(223, 221, 221, 0.445);
}
/*The avatar */
.Avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
.mainContent {
  width: 100%;
}
.txt {
  text-align: left;
}
.bttns {
}
</style>
