import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


function Home() {
    const { t, i18n} = useTranslation(['home']);
    const [counter, useCounter] = useState(0);

    return (
        <div>
            <div>
                    <button value= "en" onClick={() => i18n.changeLanguage('en')}>en</button>
                    <button value= "de" onClick={() => i18n.changeLanguage('de')}>de</button>
            </div>
            <div>
                <h1>{t('title')}</h1>
                <h3>{t('subtitle')}</h3>
                <form>
                    <div>
                        <span>{counter}/15</span><br/>
                        <input type="text" 
                            onChange={(ev) => useCounter(ev.target.value.length)} 
                            maxLength={15} 
                            id='fname' 
                            name='fname'/>
                        <button type="button">{t('button')}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;
