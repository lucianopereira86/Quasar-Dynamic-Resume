<template>
  <q-card v-if="model" class="q-pa-md config-container">
    <q-card-section>
      <q-input rounded dense v-model="model[lang].profile" label="Profile" class="bg-white"></q-input>
    </q-card-section>
    <ConfigIcon :model="model" prop="image" label="Profile Picture URL" />
    <q-card-section>
      <q-input rounded dense v-model="model.name" label="Name" class="bg-white"></q-input>
    </q-card-section>
    <q-card-section class="q-pb-none">
      <span class="text-subtitle1 text-black text-bold">Personal Data</span>
    </q-card-section>
    <q-card-section>
      <q-list>
        <ItemList
          color="red"
          icon="fas fa-birthday-cake"
          :model="model[CONFIG.lang()]"
          prop="birthday"
          :masks="['##/##/####']"
        />
        <ItemList
          color="secondary"
          icon="fas fa-phone"
          :model="model[CONFIG.lang()]"
          prop="phone"
          :masks="['(##) ####-####', '(##) #####-####']"
        />
        <ItemList color="accent" icon="fas fa-at" :model="model" prop="email" />
        <ItemList
          color="warning"
          icon="fas fa-globe-americas"
          :model="model[CONFIG.lang()]"
          prop="location"
        />
        <ItemList
          color="positive"
          icon="fab fa-whatsapp"
          :model="model[CONFIG.lang()]"
          prop="whatsapp"
          :masks="['(##) ####-####', '(##) #####-####']"
        />
        <ItemList color="primary" icon="fab fa-linkedin-in" :model="model" prop="linkedIn" />
        <ItemList color="black" icon="fab fa-github" :model="model" prop="github" />
        <ItemList color="info" icon="fab fa-skype" :model="model" prop="skype" />
        <ItemList
          color="grey"
          icon="far fa-comment-dots"
          :model="model[CONFIG.lang()]"
          prop="summary"
          :isArea="true"
        />
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
import ItemList from '../../utils/ItemList'
import ConfigIcon from '../../config/ConfigIcon'
export default {
  name: 'ConfigDrawerProfile',
  props: {
    lang: String,
    model: Object,
    CONFIG: Object
  },
  components: {
    ItemList,
    ConfigIcon
  }
}
</script>

<style>
</style>
