import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = "https://lamlankosi.github.io/VueData/data"
export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    experience: null,
    skills: null,
    testimonials: null,
    projects: null,
    
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value){
      state.jobTitle = value
    },
    setAbout(state, value){
      state.about = value
    },
    setEducation(state, value){
      state.education = value
    },
    setExperience(state, value){
      state.experience = value
    },
    setSkills(state, value){
      state.skills = value
    },
    setTestimonials(state, value){
      state.testimonials = value
    },
    setProjects(state, value){
      state.projects = value
    },
  },
  actions: {
    async fetchJobTitle(context){
      try{
        let {jobTitle} = await (await axios.get(portfolioURL)).data
        context.commit("setJobTitle" , jobTitle)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "failed to fetch the job title",
          icon: "error",
          timer: 2000
      })
      }
    },
    async fetchAbout(context){
      try{
        let {about} = await (await axios.get(portfolioURL)).data
         context.commit("setAbout" , about)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "failed to fetch the about",
          icon: "error",
          timer: 2000
      })
      }
    },
    async fetchEducation(context){
      try{
        let {education} = await (await axios.get(portfolioURL)).data
         context.commit("setEducation" , education)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "failed to fetch the education",
          icon: "error",
          timer: 2000
      })
      }
    },
    async fetchexperience(context){
      try{
        let {experience} = await (await axios.get(portfolioURL)).data
         context.commit("setExperience" , experience)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "failed to fetch the experience",
          icon: "error",
          timer: 2000
      })
      }
    },
    async fetchSkills(context){
      try{
        let {skills} = await (await axios.get(portfolioURL)).data
         context.commit("setSkills" , skills)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "failed to fetch the skills",
          icon: "error",
          timer: 2000
      })
      }
    },
    async fetchTestimonials(context){
      try{
        let {testimonials} = await (await axios.get(portfolioURL)).data
         context.commit("setTestimonials" , testimonials)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "failed to fetch the testimonials",
          icon: "error",
          timer: 2000
      })
      }
    },
    async fetchProjects(context){
      try{
        let {projects} = await (await axios.get(portfolioURL)).data
         context.commit("setProjects" , projects)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "failed to fetch the projects",
          icon: "error",
          timer: 2000
      })
      }
    },
  },
  modules: {
  }
})
