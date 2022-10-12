import createGlobal from '@/global/index';
import { createPinia } from 'pinia';
import { app } from '@/core/index';

app.use(createPinia());
createGlobal(app);

app.mount('#app');
