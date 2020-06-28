import MyNotes from './components/MyNotes.vue'
import CreateNotes from './components/CreateNote.vue'
import SingleBlog from './components/SingleBlog.vue'

export default[
    {path: '/' , component: MyNotes},
    {path: '/createBlogs', component: CreateNotes},
    {path: '/blog/:id', component: SingleBlog}
]
    