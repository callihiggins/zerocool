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

  return (
    <>
      <Nav active="team"></Nav>
      <div css={styles.aboutContainerClass}>
        <div css={styles.headerClass}>
          <div css={styles.textClass}>Our<br />team</div>
          <div css={styles.descriptionClass}>
            <div>Here’s our working collective of directors, producers, and editors. We love what we do and like each other a lot!</div>
            <Link to="/jobs" css={styles.buttonClass}>Join us!</Link>
          </div>
        </div>
        {teamData?.length > 1 && (
           <div css={styles.peopleContainerClass}>
            {teamData}
          </div>
        )}
        {teamData?.length < 2 && (
          <div css={styles.noTeamClass}>Coming soon!</div>
        )}
      </div>
      <Footer darkMode={true}/>
    </>
  )
}

export default Team;
