<template>
  <v-navigation-drawer
    rail
    expand-on-hover
    border="0"
    color="blue"
    class="rounded-e-xl"
  >
    <template v-slot:prepend>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>
    </template>
    <v-list density="compact" class="mt-16">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="white"
      >
        <template v-slot:prepend>
          <v-icon size="20" :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title
          class="text-body-2"
          v-text="item.text"
        ></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    active: true,

    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),
};
</script>