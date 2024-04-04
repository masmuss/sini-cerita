import QuestionsList from '@/components/views/question'
import QuestionForm from '@/components/views/question/question-form'
import {getAllQuestions} from '@/lib/actions/question-action'
import {Question} from '@/lib/types/question'
import {validateRequest} from "@/lib/auth";
import Logout from "@/components/partials/logout";

export default async function MainPage() {
    const questions = await getAllQuestions()
    const {user} = await validateRequest()

    return (
        <div className={'mx-auto px-4 py-20 md:max-w-3xl md:px-0'}>
            <div className={'w-full flex justify-between items-center'}>
                <h1 className={'font-semibold'}>Pertanyaan</h1>
                {user && (<Logout/>)}
            </div>
            <QuestionForm/>

            {questions && <QuestionsList questions={questions as Question[]}/>}
        </div>
    )
}
