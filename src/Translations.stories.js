import React from 'react';
import { storiesOf } from '@storybook/react';

import Translations, {setTranslations,setLocale} from 'react-i18n-q';

setTranslations({
  en:{
    greetings:values=>`Hello ${values.name}`
  },
  es:{
    greetings:values=>`Hola ${values.name}`
  }
})

setLocale('en')

class DefaultStory extends React.Component{
  render(){
    return <div>
      <button onClick={(()=>{ setLocale('es'); this.forceUpdate(); }).bind(this)}>
        Change to ES
      </button>
      <Translations id="greetings" name="Jorge"></Translations>
    </div>

  }
}

storiesOf('Translations', module).add('Default', () => <DefaultStory />)
