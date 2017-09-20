import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import School from '@/components/SchoolClouds/index'
import CourseList from '@/components/SchoolClouds/Course'
import CourseContent from '@/components/SchoolClouds/info'
import SelfTaught from '@/components/course/SelfTaught'
import LearnList from '@/components/course/learn'
import VideoContent from '@/components/course/Video'
import PdfContent from '@/components/course/pdf'
import Techno from '@/components/Technology/Techno'
import PostList from '@/components/Technology/postlist'
import DetailsContent from '@/components/Technology/details'
import Industry from '@/components/Industry/Industry'
import FillForm from '@/components/Industry/fillform'
import step1 from '@/components/Industry/step1'
import step2 from '@/components/Industry/step2'
import step3 from '@/components/Industry/step3'
import step4 from '@/components/Industry/step4'
import Apply from '@/components/Industry/apply'
import Product from '@/components/product/Product'
import ProductList from '@/components/product/list'
import ProductContent from '@/components/product/content'
import BaseList from '@/components/product/base'
import Ation from '@/components/product/ation'
import About from '@/components/About/index'
import a1 from '@/components/About/a1'
import a2 from '@/components/About/a2'
import a3 from '@/components/About/a3'
import a4 from '@/components/About/a4'
import Print from '@/components/public/Download'
import perData from '@/components/public/personalData'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Video',
      component: VideoContent
    },
    {
      path: '/perData',
      component: perData
    },
    {
      path: '/School',
      component: School,
      redirect: '/School/Course',
      children: [
        {
          path: 'Course',
          component: CourseList
        },
        {
          path: 'info',
          component: CourseContent
        }
      ]
    },
    {
      path: '/Print',
      component: Print
    },
    {
      path: '/SelfTaught',
      component: SelfTaught,
      redirect: '/SelfTaught/learn',
      children: [
        {
          path: 'learn',
          component: LearnList
        },
        {
          path: 'Pdf',
          component: PdfContent
        }
      ]
    },
    {
      path: '/Techno',
      component: Techno,
      redirect: '/Techno/postlist',
      children: [
        {
          path: 'postlist',
          component: PostList
        },
        {
          path: 'details',
          component: DetailsContent
        }
      ]
    },
    {
      path: '/Industry',
      component: Industry,
      redirect: '/Industry/apply',
      children: [
        {
          path: 'apply',
          component: Apply
        },
        {
          path: 'fillform',
          component: FillForm,
          children: [
            {
              path: 'step1',
              component: step1
            },
            {
              path: 'step2',
              component: step2
            },
            {
              path: 'step3',
              component: step3
            },
            {
              path: 'step4',
              component: step4
            }
          ]
        }
      ]
    },
    {
      path: '/Product',
      component: Product,
      redirect: '/Product/list',
      children: [
        {
          path: 'list',
          component: ProductList
        },
        {
          path: 'content',
          component: ProductContent
        },
        {
          path: 'ation',
          component: Ation
        },
        {
          path: 'base',
          component: BaseList
        }
      ]
    },
    {
      path: '/About',
      component: About,
      redirect: '/About/a1',
      children: [
        {
          path: 'a1',
          component: a1
        },
        {
          path: 'a2',
          component: a2
        },
        {
          path: 'a3',
          component: a3
        },
        {
          path: 'a4',
          component: a4
        }
      ]
    }
  ]
})
