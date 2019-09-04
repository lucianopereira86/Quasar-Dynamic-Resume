<template>
  <q-dialog v-model="show" position="left" v-if="CONFIG.profile">
    <q-layout style="width: 50vw;min-height:90vh">
      <DrawerTitle
        icon="fas fa-address-card"
        :text="CONFIG.labels.drawer.profile"
        :CONFIG="CONFIG"
      />
      <q-card class="full-width" style="overflow-y:auto;max-height:85vh">
        <q-card-section class="text-center bg-grey-2">
          <q-avatar size="200px">
            <q-img :src="CONFIG.profile.image" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <q-list>
            <q-item-label header class="text-center">
              <span class="text-h6">{{CONFIG.profile.name}}</span>
            </q-item-label>
            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="fas fa-birthday-cake" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{CONFIG.profile.birthday}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="secondary" name="fas fa-phone" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{CONFIG.profile.phone}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="fas fa-at" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{CONFIG.profile.email}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="warning" name="fas fa-globe-americas" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{CONFIG.profile.location}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="positive" name="fab fa-whatsapp" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{CONFIG.profile.whatsapp}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="black" name="fab fa-linkedin-in" />
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  <a :href="CONFIG.profile.linkedIn" target="_blank">{{CONFIG.profile.linkedIn}}</a>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon color="info" name="fab fa-skype" />
              </q-item-section>

              <q-item-section>{{CONFIG.profile.skype}}</q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="grey" name="far fa-comment-dots" />
              </q-item-section>

              <q-item-section>
                <q-item-label v-html="CONFIG.profile.summary" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-layout>
  </q-dialog>
</template>

<script>
import DrawerTitle from './DrawerTitle'
export default {
  props: {
    CONFIG: Object
  },
  components: {
    DrawerTitle
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
