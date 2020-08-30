import * as React from 'react';
import styled from 'styled-components'

export const StyledLayout = React.memo(styled('div')`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
overflow-x: hidden;
 background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
 background-blend-mode: multiply;
`)