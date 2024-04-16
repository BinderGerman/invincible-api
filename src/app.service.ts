import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	getHello(): number {
		const one = 1
		return one * 3
	}
}
