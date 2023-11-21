import type { AppToken } from '@/utilities';
import { ref } from 'vue'

export const userStore = ref<AppToken | null>(null);
