import React from 'react';
import Nav from '../shared/Nav';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Person from './Person';
import * as styles from './styles.js'

const TEAM_DATA = gql`
{
  teamMemberCollection(limit: 16) {
		items {
			name
			bio {
				json
			}
			order
			title
			photo {
        url
			}
		}
	}
}`

const Team = () => {
  const { data } = useQuery(TEAM_DATA);
	const teamData = data?.teamMemberCollection?.items.map(
    data => <Person data={data} />
  )
  return (
    <>
      <Nav active="team"></Nav>
      <div css={styles.aboutContainerClass}>
        <div css={styles.teamBannerClass}>Meet our team</div>
        <div css={styles.teamContainerClass}>
          <div css={styles.peopleContainerClass}>
            {teamData}
          </div>
        </div>
      </div>
    </>
  )
}

export default Team;
