import React from 'react';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Person from './Person';
import * as styles from './styles.js'
import * as sharedstyles from '../shared/styles.js';

const TEAM_DATA = gql`
{
  teamMemberCollection {
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

  const manyPeople = []

  for (let i = 0; i < 9; i++) {
    manyPeople.push(teamData)
  }
  return (
    <>
      <Nav active="team"></Nav>
      <div css={styles.aboutContainerClass}>
        <div css={styles.headerClass}>
          <div css={styles.textClass}>Our<br />team</div>
          <div css={styles.descriptionClass}>
            <div>We are a working collective of producers, directors, editors, yadda yadda yadda.</div>
            <Link to="/jobs" css={styles.buttonClass}>Join us!</Link>
          </div>

        </div>
        <div css={styles.peopleContainerClass}>
          {manyPeople}
        </div>
      </div>
      <Footer darkMode={true}/>
    </>
  )
}

export default Team;
