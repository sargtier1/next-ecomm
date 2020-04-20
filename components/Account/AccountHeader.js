import { Fieldset, Spacer, useTheme, Dot } from '@zeit-ui/react'
import { User } from 'react-feather'

export default function AccountHeader({
  role,
  email,
  name,
  createdAt,
  formatDate,
}) {
  const { palette } = useTheme()
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: `${palette.violet}`,
          height: '100%',
          width: '100%',
          borderRadius: '5px',
        }}
        className='center'
      >
        <Spacer y={1} />
        <User size={150} color='white' />
        <Spacer y={1} />

        <Fieldset.Title style={{ color: 'white' }}>{name}</Fieldset.Title>
        <Fieldset.Subtitle style={{ color: 'white' }}>
          {email}
        </Fieldset.Subtitle>
        <Fieldset.Subtitle style={{ color: 'white' }}>
          {formatDate(createdAt)}
        </Fieldset.Subtitle>
        <Spacer y={1} />
        <div style={{ color: 'white' }}>
          {role === 'user' ? (
            <div className='note'>
              <Dot type='error'>Role: {role}</Dot>
            </div>
          ) : role === 'admin' ? (
            <div className='note'>
              <Dot type='warning'>Role: {role}</Dot>
            </div>
          ) : (
            <div className='note'>
              <Dot type='success'>Role: {role}</Dot>
            </div>
          )}
        </div>
        <Spacer y={2} />
      </div>
      <style>
        {`
        .note {
          padding: 8pt 16pt;
          font-size: 14px;
          line-height: 1.8;
          border: 1px solid #eaeaea;
          background-color: #fff;
          color: grey;
          border-radius: 5px;
        }`}
      </style>
    </>
  )
}
