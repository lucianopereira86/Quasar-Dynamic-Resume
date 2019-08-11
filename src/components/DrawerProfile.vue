<template>
  <q-dialog v-model="show" position="left" v-if="LANG.profile">
    <q-layout style="width: 50vw;min-height:70vh">
      <q-toolbar class="bg-accent text-white">
        <q-toolbar-title class="text-h6 q-pa-sm">
          <q-item>
            <q-item-section avatar>
              <q-icon name="fas fa-address-card" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h5">{{LANG.labels.drawer.profile}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-toolbar-title>
      </q-toolbar>
      <q-card class="full-width full-height" style="overflow-y:auto;max-height:70vh">
        <q-card-section class="text-center bg-grey-2">
          <q-avatar size="200px">
            <q-img :src="LANG.profile.image" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <q-list>
            <q-item-label header class="text-center">
              <span class="text-h6">{{LANG.profile.name}}</span>
            </q-item-label>
            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="fas fa-birthday-cake" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{LANG.profile.birthday}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="secondary" name="fas fa-phone" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{LANG.profile.phone}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="fas fa-at" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{LANG.profile.email}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="warning" name="fas fa-globe-americas" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{LANG.profile.location}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="positive" name="fab fa-whatsapp" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{LANG.profile.whatsapp}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="black" name="fab fa-linkedin-in" />
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  <a :href="LANG.profile.linkedIn.url">{{LANG.profile.linkedIn.id}}</a>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon color="info" name="fab fa-skype" />
              </q-item-section>

              <q-item-section>{{LANG.profile.skype}}</q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="grey" name="far fa-comment-dots" />
              </q-item-section>

              <q-item-section>
                <q-item-label v-html="LANG.profile.summary" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-layout>
  </q-dialog>
</template>

<script>
export default {
  props: {
    LANG: Object
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    open () {
      this.show = true
    }
  }
}
</script>

<style>
</style>
