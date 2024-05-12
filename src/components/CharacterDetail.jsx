import React from 'react'

function CharacterDetail(props) {
    const {currentChar} = props;

  return (
    <div>
        {currentChar['name']}: {currentChar['description']} comics: {(currentChar['comics']['items']['length'] > 0) && currentChar['comics']['items'][1]['name']}

    </div>
  )
}

export default CharacterDetail
