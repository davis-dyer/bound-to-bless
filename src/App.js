import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header, MainContainer, CreateContainer, } from './components';
import BibleContainer from './pages/bibles/BibleContainer'
import { useStateValue } from './context/StateProvider';
import { getAllBibleItems } from './utils/firebaseFunctions';
import {actionType} from './context/reducer';
import ContactContainer from './pages/contact/ContactContainer';
import MyStory from './pages/about/MyStory';
import Grace from './pages/bibles/Grace'

const App = () => {
    const [{bibleItems}, dispatch] = useStateValue();

    const fetchData = async () => {
        await getAllBibleItems().then((data) => {
            dispatch({
                type: actionType.SET_BIBLE_ITEMS,
                bibleItems: data
            })
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-screen h-auto flex flex-col bg-primary">
                <Header />

                <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
                    <Routes>
                        <Route path='/*' element={<MainContainer />} />
                        <Route path='/createItem' element={<CreateContainer />} />
                        <Route path='/bibles'
                            element={<BibleContainer />}
                        />
                            <Route path='/bibles/grace'
                                element={<Grace />}
                            />
                        <Route path='/about'
                            element={<MyStory />}
                        />
                        <Route path='/contact'
                            element={<ContactContainer />}
                        />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
    );
};

export default App