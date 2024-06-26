export interface IBlockHeader {
	version: number
	output_hash: string
	address: string
	public_key: string
	block_id: number
	update_id: number
	signature: string | undefined
}
