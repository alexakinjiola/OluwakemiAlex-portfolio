import { useId, useRef, useState } from 'react'
import { person } from '../data/site.js'
import Icon from './Icon.jsx'

// Sends through FormSubmit (no account or API key). The sender gets an automatic reply.
const ENDPOINT = `https://formsubmit.co/ajax/${person.email}`
const AUTORESPONSE =
  "Hi there, and thank you for reaching out. I've received your message and will get back to you within one business day. In the meantime, feel free to reply to this email with anything else that would help. Warm regards, Oluwakemi Alex, Virtual Assistant"

const TOPICS = ['Inbox & calendar', 'Recruitment support', 'Social & content', 'Admin & records', 'Something else']

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell me your name.'
  if (!values.email.trim()) errors.email = 'Please add an email so I can reply.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'That email doesn’t look quite right. Check for a typo?'
  if (!values.message.trim()) errors.message = 'A line or two about what you need is plenty.'
  return errors
}

export default function ContactForm({ compact = false }) {
  const uid = useId()
  const formRef = useRef(null)
  const [values, setValues] = useState({ name: '', email: '', topic: '', message: '', _honey: '' })
  const [errors, setErrors] = useState({})
  const [state, setState] = useState('idle') // idle | sending | sent | failed

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const firstBad = Object.keys(found)[0]
    if (firstBad) {
      formRef.current?.querySelector(`[name="${firstBad}"]`)?.focus()
      return
    }
    if (values._honey) { setState('sent'); return }

    setState('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          topic: values.topic || 'Not specified',
          message: values.message,
          _subject: 'New enquiry from your portfolio website',
          _template: 'table',
          _captcha: 'false',
          _autoresponse: AUTORESPONSE,
        }),
      })
      const data = await res.json().catch(() => ({}))
      setState(res.ok && (data.success === true || data.success === 'true') ? 'sent' : 'failed')
    } catch {
      setState('failed')
    }
  }

  if (state === 'sent') {
    return (
      <div className="form-success" role="status" tabIndex={-1} ref={(el) => el?.focus()}>
        <span className="fs-badge"><Icon name="check" /></span>
        <h3 className="h4">Message sent</h3>
        <p>Thank you. Your note is on its way, and a confirmation has just landed in your inbox. You’ll hear back within a day.</p>
      </div>
    )
  }

  const field = (key) => ({
    id: `${uid}-${key}`,
    name: key,
    value: values[key],
    onChange: set(key),
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${uid}-${key}-err` : undefined,
  })
  const err = (key) => errors[key] && (
    <p className="field-error" id={`${uid}-${key}-err`}><Icon name="error" fill />{errors[key]}</p>
  )

  return (
    <form ref={formRef} className={`form${compact ? ' form--compact' : ''}`} onSubmit={onSubmit} noValidate>
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${uid}-hp`}>Leave this empty</label>
        <input id={`${uid}-hp`} name="_honey" tabIndex={-1} autoComplete="off" value={values._honey} onChange={set('_honey')} />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor={`${uid}-name`}>Your name</label>
          <input type="text" autoComplete="name" placeholder="Jane Doe" required {...field('name')} />
          {err('name')}
        </div>
        <div className="field">
          <label htmlFor={`${uid}-email`}>Email</label>
          <input type="email" autoComplete="email" placeholder="jane@company.com" required {...field('email')} />
          {err('email')}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${uid}-topic`}>What do you need help with? <span className="opt">(optional)</span></label>
        <div className="select">
          <select {...field('topic')}>
            <option value="">Choose one</option>
            {TOPICS.map((t) => <option key={t}>{t}</option>)}
          </select>
          <Icon name="expand_more" />
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${uid}-message`}>Tell me a little more</label>
        <textarea rows={compact ? 4 : 5} placeholder="A quick note on your role and what's eating your time…" required {...field('message')} />
        {err('message')}
      </div>

      <div className="form-foot">
        <button type="submit" className="btn btn--primary" disabled={state === 'sending'}>
          <span>{state === 'sending' ? 'Sending…' : 'Send message'}</span>
          <span className="icon btn-icon" aria-hidden="true">{state === 'sending' ? 'progress_activity' : 'send'}</span>
        </button>
        <p className="form-note">I usually reply within one business day.</p>
      </div>

      <p className="form-status" role="alert">
        {state === 'failed' && (
          <>That didn’t send, and that’s on my side, not yours. Please try again, or email me directly at{' '}
            <a href={`mailto:${person.email}`}>{person.email}</a>.</>
        )}
      </p>
    </form>
  )
}
