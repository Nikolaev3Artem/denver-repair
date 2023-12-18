/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'xxl':{'max':'1440px'},
      'xl':{'max':'1200px'},
      'lg':{'max':'1024px'},
      'md':{'max':'768px'},
      'sm':{'max':'700px'},
      'xs':{'max':'500px'}
    },
    container:{
      center:true,
    },
    extend: {
      colors:{
        'dark-green':'#044743',
        'orange':'#FFA500',
        'white':'#ffffff'
      }
    },
  },
  plugins: [],
}