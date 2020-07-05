<template>
  <div>
    <div>
      <aside>
        hello
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
              <template slot="title">
                Advanced Card
              </template>
              <template slot="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
              </template>
            </Card>
          </div>
          <div class="p-col">
            <Card>
              <template slot="title">
                Advanced Card
              </template>
              <template slot="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
              </template>
            </Card>
          </div>
          <div class="p-col">
            <Card>
              <template slot="title">
                Advanced Card
              </template>
              <template slot="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
              </template>
            </Card>
          </div>
          <div class="p-col">
            <Card>
              <template slot="title">
                Advanced Card
              </template>
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
                hello how are you doing?
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
      </main>
    </div>
  </div>
</template>

<script>
import TabMenu from "primevue/tabmenu";
import Card from "primevue/card";
import Chart from "primevue/chart";
export default {
  name: "HelloWorld",

  data() {
    return {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/tabmenu" },
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
  components: {
    TabMenu,
    Card,
    Chart,
  },
};
</script>

<style scoped lang="scss">
html,
body,
main {
  font-family: "Quicksand", sans-serif;
}

div {
  margin: 0;
}
aside {
  height: 100vh;
  width: 280px;
  border-style: solid;
  border: 1px;
  background-color: aquamarine;
  margin: 0;
  position: fixed;
}
main {
  position: absolute;
  left: 280px;
  margin-right: 20px;
  width: 76%;
  margin-left: 20px;
  background-color: rgba(223, 221, 221, 0.445);
}
.mainContent {
  width: 100%;
}
.hm {
  background-color: brown;
}
.hm1 {
  background-color: rgb(40, 179, 93);
}
</style>
