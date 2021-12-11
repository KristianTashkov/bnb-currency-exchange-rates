import { Entity, Column, Unique } from 'typeorm'

import { BaseTable } from '../utils'

@Entity()
@Unique('UQ_RATE', ['isoCode',
  'date',
  'rate'])
export class ExchangeRate extends BaseTable {

  @Column('datetime')
    date: Date

  @Column('varchar', {
    length: 3
  })
    isoCode: string

  @Column('decimal')
    rate: number
}
