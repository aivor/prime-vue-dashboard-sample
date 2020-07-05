<template>
  <div>
    <div>
      <aside>
        <div class="sidenav">
          <img src="../assets/andy.jpg" class="Avatar" /><br />
          <p>Andy Ivor</p>
          <hr />

          <a href=""><i class="pi pi-home"></i> HOME</a>
          <a href=""><i class="pi pi-user"></i> PROFILE</a>
          <a href=""><i class="pi pi-calendar-plus"></i> CALENDER</a>
          <hr />
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
              <template slot="title">
                IOS development
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
                Android Dev
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
                Reports
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
                Web projects
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
                Getting to know how to effectively use primevue
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
  margin-left: 20px;
  margin-top: 10px;
  margin-right: 10px;
}
.sidenav a:hover {
  color: #f18ec4;
}

main {
  position: absolute;
  left: 230px;
  margin-right: 20px;
  width: 80%;
  margin-left: 20px;
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
.hm {
  background-color: brown;
}
.hm1 {
  background-color: rgb(40, 179, 93);
}
</style>
