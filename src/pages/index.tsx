import React from 'react'
import styled from 'styled-components'
import CommonLayout from 'layouts/Common'
import Personal from 'components/Personal'
import SocialLinks from 'components/SocialLinks'
import Media from 'utils/Media'

const IndexPage = () => {
  return (
    <CommonLayout>
      <Page$>
        <MainHeader$>
          <Personal />
        </MainHeader$>

        <Info$>
          <p>Currently working on UI and resume templates at <a target='_blank' href='https://resume.io'>Resume.io</a></p>
          <p>My hobbies are generative arts and animations</p>
          <p>Participated frontend development team at <a target='_blank' href='https://pure.sex'>Pure.sex</a></p>
          <p>Worked on <a target='_blank' href='https://journal.tinkoff.ru/'>Tinkoff Journal</a>, <a target='_blank' href='https://etika.nplus1.ru'>New ethics</a> and a lot of different e-commerce sites and online magazines with guys from <a target='_blank' href='https://codecode.ru'>CodeCode</a></p>
          <p>Developed a lot of UI libraries at <a target='_blank' href='https://greatsimple.io/'>Great Simple Studio</a>. Made HTML email templates Kit integrated with Mailchimp and Shopify customization tools</p>
          <p>Started web developers community <a target='_black' href='https://www.instagram.com/dev_seagulls/'>Dev Seagulls</a> at my hometown Makhachkala. Organized meetups and hackatons, gave talks and lessons about good UI and web design.</p>
        </Info$>
        
        <SocialLinks />
      </Page$>
    </CommonLayout>
  )
}

export default IndexPage

const Page$ = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 32px 112px;
  margin: 0px;
  display: flex;
  flex-direction: column;

  ${Media.Phone`
    padding: 24px 20px;
  `}
`

const MainHeader$ = styled.div`
  margin-bottom: 28px;
  transform: translateX(-80px);

  ${Media.Phone`
    transform: translateX(0px);
    margin-bottom: 20px;
  `}
`

const Info$ = styled.main`
  max-width: 540px;
  margin-bottom: auto;
`