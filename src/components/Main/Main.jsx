import React from 'react'
import ActivitiesOffset from '../ActivitiesOffset/ActivitiesOffset'
import Connection from '../Connection/Connection'
import CreatorDescription from '../CreatorDescription/CreatorDescription'
import FirstContent from '../FirstContent/FirstContent'
import Industry from '../Industry/Industry'
import IntegrationApi from '../IntegrationApi/IntegrationApi'
import Map from '../Map/Map'
import './Main.scss'
function Main() {
	return (
		<div className='mainContent'>
			<FirstContent />
			<Map />
			<Connection />
			<Industry />
			<IntegrationApi />
			<CreatorDescription />
			<ActivitiesOffset />

		</div>
	)
}

export default Main