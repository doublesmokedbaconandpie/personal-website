import { getPostData } from "@/lib/posts"

export default async function education() {
    const postData = await getPostData('projects');
    const htmlData = postData['contentHtml'];
    console.log(htmlData)
    return (
        <div dangerouslySetInnerHTML={{__html: htmlData}}></div>
    )
}