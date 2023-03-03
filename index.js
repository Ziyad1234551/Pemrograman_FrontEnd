var users =["ziyad","kamil","nurul","doe","isfa"];


function all(){
	for(const user of users){
		console.log(user)
	}
}

function store(user){
	const nama = user;

	users.push(nama);
	console.log("berhasil ditambahkan")
	all()
}

function update(index,user){
	users[index] = user
	users.push(user)
	console.log("berhasil diupdate")
	all()

}

function destroy(index){
	console.log("berhasil dihapus")

	users.splice()
	all()
}

const main = ()=>{

	console.log("get all users")

	all()


	const newuser = [{
		"nama":"ziyad",
		"jabatan":"mahasiswa",
		"umur":22
	}];
	store(newuser)

	const updateUser = {
		"nama":"kamil",
		"jabatan":"siswa",
		"umur": 22,
	}
	const Urutan = 0;

	update(Urutan,updateUser);

	const hapusUrutan = 0;

	destroy(hapusUrutan);



}

main()
store()
update()
destroy(2)