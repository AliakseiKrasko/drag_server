import {useState} from 'react'
import './App.css'
import axios from 'axios';

function App() {
    const [drag, setDrag] = useState(false)

    function dragStartHundler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeavetHundler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setDrag(false)
    }

    function dropHundler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        const files = [...e.dataTransfer.files]
        const formData = new FormData()
        formData.append('file', files[0])
        formData.append('userId', '1')
        axios.post('url', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'API-KEY': '22344'
            },
            withCredentials: true
        })
            .then(res => {
                console.log('✅ Upload success', res.data)
            })
            .catch(err => {
                console.error('❌ Upload error', err)
            })
            .finally(() => setDrag(false)); // ✅ drag убираем в finally
    }

    return (
        <div className='app'>
            {drag
                ? <div
                    onDragStart={(e => dragStartHundler(e))}
                    onDragLeave={(e => dragLeavetHundler(e))}
                    onDragOver={(e => dragStartHundler(e))}
                    onDrop={(e => dropHundler(e))}
                    className='drop-area'>Отпусти файлы, чтобы загрузить их</div>
                : <div
                    onDragStart={(e => dragStartHundler(e))}
                    onDragLeave={(e => dragLeavetHundler(e))}
                    onDragOver={(e => dragStartHundler(e))}
                >Перетащи файлы, чтобы загрузить их</div>
            }

        </div>
    )
}

export default App
