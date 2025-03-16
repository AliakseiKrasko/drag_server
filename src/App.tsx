import {useState} from 'react'
import './App.css'

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

    return (
        <div className='app'>
            {drag
                ? <div
                    onDragStart={(e => dragStartHundler(e))}
                    onDragLeave={(e => dragLeavetHundler(e))}
                    onDragOver={(e => dragStartHundler(e))}
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
