import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 20px;
  
  .Header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    &__title {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`