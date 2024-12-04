import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // 소스 폴더 별칭 설정
    },
  },
  build: {
    outDir: 'dist', // 빌드 결과물 디렉토리를 기본값으로 변경
  },
  server: {
    port: 3000, // 개발 서버 포트 설정
    open: true, // 서버 시작 시 브라우저 자동 열기
  },
});
